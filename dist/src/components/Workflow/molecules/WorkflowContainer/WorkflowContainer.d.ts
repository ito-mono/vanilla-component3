import { useWorkFlowReturn } from './useWorkflow';
export type WorkflowContainerProps = {
    props: useWorkFlowReturn;
};
export declare function WorkflowContainer({ props: { units, setUnits, statusCode, setStatusCode, lang }, }: WorkflowContainerProps): import("react/jsx-runtime").JSX.Element;
