import {Account} from "./Account";

// we may use this enum internally
/* 
export enum promptState {
	login = "login",
	select_account = "select_account",
	consent = "consent",
	none = "none",
}
*/

// we considered making this as "enum", however it looks like the allowed list of prompt values kept changing over past couple of years
// and there are some undocumented prompt values for some internal partners, so the type is kept generic "string" instead of the "enum"
export type Prompt = {
	prompt: string;
};

// TODO: account not prompted - check this code later
/*
export type AuthenticationParameters = {
    scopes: Array<string>;  
    extraScopesToConsent?: Array<string>;
    prompt?: Prompt;
    extraQueryParameters?: { [ header: string ]: string};
    claimsRequest?: null;        
    authority?: string;                         
    correlationId?: string;
} & (
    {account?: Account} | {sid?: string} | {login_hint?: string}
); */


export type AuthenticationParameters = {
    scopes: Array<string>;  
    extraScopesToConsent?: Array<string>;
    prompt?: Prompt;
    extraQueryParameters?: { [ header: string ]: string};
    claimsRequest?: null;        
    authority?: string;                         
    correlationId?: string;
    
    account?: Account;
    sid?: string;
    login_hint?: string;
};



