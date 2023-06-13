import type { WritableAtom } from "jotai";
export declare const ADDON_ID = "storybook/jotai-addon";
export declare const PANEL_ID: string;
export declare const PARAM_KEY = "jotai";
export declare const EVENTS: {
    ATOMS_CHANGED: string;
    RENDERED: string;
};
export declare type AnyWritableAtom = WritableAtom<unknown, any[], any>;
export declare type InitialValues = (readonly [AnyWritableAtom, unknown])[];
export declare const createInitialValues: () => {
    get: () => InitialValues;
    set: <Value>(anAtom: AnyWritableAtom, value: Value) => void;
};
export declare const userAtom: import("jotai").Atom<unknown>;
