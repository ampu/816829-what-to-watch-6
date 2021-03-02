const OperationStatus = {
  UNSET: `unset`,
  PENDING: `pending`,
  RESOLVED: `resolved`,
  REJECTED: `rejected`,
};

const OPERATION_STATUSES = Object.values(OperationStatus);

export {
  OperationStatus,
  OPERATION_STATUSES,
};
