import { globalStateApiType } from "../../GlobalStateTypes";

const UIModule = ({ set }: globalStateApiType) => {
  return {
    article: null,
    setArticle: (article: any) => {
      set({ article: article });
    },
  };
};

export { UIModule };
