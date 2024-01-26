import { WorkflowStatus } from '../../enum';
import { WorkflowUnitProps } from '../WorkflowUnit';
export type WorkflowContainerProps = {
    units?: WorkflowUnitProps[];
    statusCode?: WorkflowStatus;
};
export declare function WorkflowContainer({ statusCode, ...props }: WorkflowContainerProps): import("react/jsx-runtime").JSX.Element;
