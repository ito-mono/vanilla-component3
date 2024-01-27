import { Language, WorkflowStatus } from "../../enum";
export type WorkflowStatusLabelProps = {
  statusCode?: WorkflowStatus;
  lang?: Language;
};
export declare function WorkflowStatusLabel({
  statusCode,
  lang,
}: WorkflowStatusLabelProps): import("react/jsx-runtime").JSX.Element;
