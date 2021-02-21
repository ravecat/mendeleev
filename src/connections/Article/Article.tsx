import { connect } from "app/store";
import { statusElementsAtom } from "app/store/element";
import { compose, withAlternate } from "common/hoc";
import { Article as ArticleView, ArticleProps } from "components/Article";
import { Loader } from "components/Loader";

export const Article = compose<
  ArticleProps,
  Omit<ArticleProps, "statusElements">,
  Omit<ArticleProps, "statusElements">
>(
  connect({
    statusElements: statusElementsAtom,
  }),
  withAlternate(
    ({ statusElements }) =>
      !!statusElements?.initial || !!statusElements?.fetching,
    Loader
  )
)(ArticleView);
