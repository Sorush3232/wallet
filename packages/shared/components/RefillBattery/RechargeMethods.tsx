import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Icon, List, Steezy, TonIcon, View } from '@tonkeeper/uikit';
import { t } from '@tonkeeper/shared/i18n';
import { useBatteryRechargeMethods } from '../../query/hooks';
import { Address, delay } from '@tonkeeper/core';
import { AppStackRouteNames } from '@tonkeeper/mobile/src/navigation';
import { tk } from '@tonkeeper/mobile/src/wallet';
import { useNavigation } from '@tonkeeper/router';
import { Image } from 'react-native';
import { useJettonBalances } from '@tonkeeper/mobile/src/hooks/useJettonBalances';
import { compareAddresses } from '@tonkeeper/mobile/src/utils/address';
import { formatter } from '../../formatter';
import { useExternalState } from '../../hooks/useExternalState';

export const RechargeMethods = memo(() => {
  const { methods, isLoading, reload } = useBatteryRechargeMethods();
  const nav = useNavigation();

  const { enabled } = useJettonBalances();
  const balances = useExternalState(tk.wallet.balances.state);

  const filteredJettonBalances = useMemo(
    () =>
      enabled.filter(
        (jettonBalance) =>
          methods.findIndex((method) =>
            compareAddresses(method.jetton_master, jettonBalance.jettonAddress),
          ) !== -1,
      ),
    [methods],
  );

  useEffect(() => {
    reload();
  }, []);

  const handleRechargeBattery = useCallback(
    (withAddressSelect?: boolean, jettonMaster?: string) => async () => {
      nav.navigate(AppStackRouteNames.BatterySend, {
        recipient: withAddressSelect ? undefined : tk.wallet.address.ton.friendly,
        jettonMaster,
      });
    },
    [],
  );

  const handleNavigateToPromo = useCallback(async () => {
    nav.navigate('/recharge-by-promo');
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <View>
      <List indent={false}>
        <List.Item
          chevron
          leftContent={<TonIcon showDiamond />}
          title={t('battery.other_ways.by_crypto.title', { symbol: 'TON' })}
          onPress={handleRechargeBattery(false)}
          subtitle={formatter.format(balances.ton, { currency: 'TON' })}
        />
        {filteredJettonBalances.map((jettonBalance) => (
          <List.Item
            chevron
            key={jettonBalance.jettonAddress}
            picture={jettonBalance.metadata.image}
            subtitle={formatter.format(jettonBalance.balance, {
              currency: jettonBalance.metadata.symbol,
            })}
            onPress={handleRechargeBattery(
              false,
              Address.parse(jettonBalance.jettonAddress).toRaw(),
            )}
            title={t('battery.other_ways.by_crypto.title', {
              symbol: jettonBalance.metadata.symbol,
            })}
          />
        ))}
        <List.Item
          onPress={handleRechargeBattery(true)}
          leftContent={
            <Image
              style={styles.icon.static}
              source={require('@tonkeeper/uikit/assets/battery/gift.png')}
            />
          }
          title={t('battery.other_ways.gift.title')}
          subtitle={t('battery.other_ways.gift.subtitle')}
          chevron
        />
        <List.Item
          leftContent={
            <Image
              style={styles.icon.static}
              source={require('@tonkeeper/uikit/assets/battery/promo.png')}
            />
          }
          onPress={handleNavigateToPromo}
          title={t('battery.other_ways.promo.title')}
          subtitle={t('battery.other_ways.promo.subtitle')}
          chevron
        />
      </List>
    </View>
  );
});

export const styles = Steezy.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
  icon: {
    height: 44,
    width: 44,
  },
});
