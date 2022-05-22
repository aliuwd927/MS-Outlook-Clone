import create from "zustand";
import emails from "./emails.json";

//An interface for our state
export interface UpdateState {
  id: string;
  profilePicture: string;
  nameOfSender: string;
  titleOfEmail: string;
  bodyMessage: string;
  dateOfMessage: string;
  isAttachment: string;
}

export interface Actions {
  emailDispatch: (current: UpdateState) => void;
  emailDispatchReset: () => void;
}

export interface ModalAction {
  show: boolean;
  setShow: (show: boolean) => void;
}

export interface EmailActions {
  email: UpdateState[];
  deleteEmail: (id: string) => void;
}

export interface SearchBarInput {
  searchState: string;
  searchDispatch: (input: string) => void;
}

export interface DeleteMapping {
  deletedState: UpdateState[];
  setDelete: (email2Del: [UpdateState]) => void;
}

export interface SentState {
  sentStateArray: UpdateState[];
  setStateArray: (arr: UpdateState) => void;
}

export interface DraftState {
  draftStateArray: UpdateState[];
  setDraftStateArray: (arr: UpdateState) => void;
}

//RightSecond Email Dispatch Updating State
export const rightSectionDispatch = create<UpdateState & Actions>((set) => ({
  id: "",
  profilePicture: "",
  nameOfSender: "",
  titleOfEmail: "",
  bodyMessage: "",
  dateOfMessage: "",
  isAttachment: "",
  emailDispatch: (current) =>
    set(() => ({
      id: current.id,
      profilePicture: current.profilePicture,
      nameOfSender: current.nameOfSender,
      titleOfEmail: current.titleOfEmail,
      bodyMessage: current.bodyMessage,
      dateOfMessage: current.dateOfMessage,
      isAttachment: current.isAttachment,
    })),
  emailDispatchReset: () =>
    set({
      id: "",
      profilePicture: "",
      nameOfSender: "",
      titleOfEmail: "",
      bodyMessage: "",
      dateOfMessage: "",
      isAttachment: "",
    }),
}));

//useStore
export const useStore = create<SearchBarInput>((set) => ({
  searchState: "",
  searchDispatch: (input: string) =>
    set(() => ({
      searchState: input,
    })),
}));

export const modalStatus = create<ModalAction>((set) => ({
  show: false,
  setShow: (toShow: boolean) =>
    set(() => ({
      show: toShow,
    })),
}));

export const emailStore = create<EmailActions>((set) => ({
  email: emails,
  deleteEmail: (id) => {
    set((state) => ({
      email: state.email.filter((em) => em.id !== id),
    }));
  },
}));

export const deleteStore = create<DeleteMapping>((set) => ({
  deletedState: [],
  setDelete: ([email2Del]) => {
    set((prev) => ({
      deletedState: [...prev.deletedState, email2Del],
    }));
  },
}));

export const draftStore = create<DraftState>((set) => ({
  draftStateArray: [],
  setDraftStateArray: (arrDraft) => {
    set((prev) => ({
      draftStateArray: [...prev.draftStateArray, arrDraft],
    }));
  },
}));

export const sentStore = create<SentState>((set) => ({
  sentStateArray: [],
  setStateArray: (arr) => {
    set((prev) => ({
      sentStateArray: [...prev.sentStateArray, arr],
    }));
  },
}));

/*

creekburn: I have 2 ideas for how to managed this. Have 2 lists, and move items between them.
 The other is to have a flag on an item, and display based on the state of the flag.


creekburn: If you have 1 list. Then when you go to display, you just need a filter before you display items.


https://github.com/jherr/todos-many-ways/blob/master/todo-zustand/src/store.tsx 

micheaaa: if you have two arrays, you inbox list can be initialized to your json data

creekburn: Would probably make things easier if they are in the same store, then your 'delete' function can manipulate both at the same time.

 */

/*



export const emailData = create<emailDataMap>((set,get)=>({
  email: emails:UpdateState,
  getEmail: ()=>{
    get({...})
  }

}))


*/
