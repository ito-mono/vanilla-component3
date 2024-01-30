export declare const lightTheme: string, vars: {
    color: {
        primary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        secondary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        tertiary: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    buttonColor: {
        color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    containerColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
};
export declare const darkTheme: string;
export declare const styles: {
    root: string;
    title: string;
    text: string;
    container: string;
    containerChildren: string;
    button: string;
};
