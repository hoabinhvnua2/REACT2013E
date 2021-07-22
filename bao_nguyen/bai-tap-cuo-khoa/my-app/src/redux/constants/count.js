export const countAction = {
  CONG: "CONG",
  TRU: "TRU",
};

export const tang = () => ({
  type: countAction.CONG,
});

export const giam = () => ({
  type: countAction.TRU,
});
