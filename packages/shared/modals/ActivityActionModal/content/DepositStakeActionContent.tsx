import { AddressListItem } from '../components/AddressListItem';
import { ExtraListItem } from '../components/ExtraListItem';
import { ActionModalContent } from '../ActionModalContent';
import { ActionItem, ActionType } from '@tonkeeper/core';
import { t } from '../../../i18n';
import { memo } from 'react';

interface DepositStakeActionContentProps {
  action: ActionItem<ActionType.DepositStake>;
}

export const DepositStakeActionContent = memo<DepositStakeActionContentProps>((props) => {
  const { action } = props;

  return (
    <ActionModalContent label={t('activityActionModal.deposit')} action={action}>
      <AddressListItem
        recipient={action.payload.pool}
        hideName={action.event.is_scam}
        destination="out"
      />
      <ExtraListItem extra={action.event.extra} />
    </ActionModalContent>
  );
});
