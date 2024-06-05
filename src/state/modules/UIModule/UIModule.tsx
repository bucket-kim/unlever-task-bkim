import { globalStateApiType } from "../../GlobalStateTypes";

const UIModule = ({ set }: globalStateApiType) => {
  return {
    article: null,
    setArticle: (article: any) => {
      set({ article: article });
    },

    loadingDone: false,
    setLoadingDone: (loadingDone: boolean) => {
      set({ loadingDone: loadingDone });
    },
  };
};

export { UIModule };
