import { Lunguage, WorkflowStatus } from '../../enum';
export type WorkflowStatusLabelProps = {
    statusCode?: WorkflowStatus;
    lang?: Lunguage;
};
export declare function WorkflowStatusLabel({ statusCode, lang, }: WorkflowStatusLabelProps): import("react/jsx-runtime").JSX.Element;
