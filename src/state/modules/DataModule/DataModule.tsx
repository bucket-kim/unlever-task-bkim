import { globalStateApiType } from "../../GlobalStateTypes";

const DataModule = ({ set }: globalStateApiType) => {
  return {
    stockData: null,
    setStockData: (stockData: any) => {
      set({ stockData: stockData });
    },
  };
};

export { DataModule };
