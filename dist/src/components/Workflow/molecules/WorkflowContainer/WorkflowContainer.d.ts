import { useWorkflowReturn } from './useWorkflow';
export type WorkflowContainerProps = {
    props: useWorkflowReturn;
};
export declare function WorkflowContainer({ props: { units, setUnits, statusCode, setStatusCode, lang }, }: WorkflowContainerProps): import("react/jsx-runtime").JSX.Element;
