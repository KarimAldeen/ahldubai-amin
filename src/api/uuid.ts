import useAddMutation from "./helper/useAddMutation"

const API = {
  ADD: `join_website`,
  ADD2: `click_whatsapp`,


};
const KEY = "join_website"

const KEY2 = "click_whatsapp"



export const useAddJoin_website = () => useAddMutation(KEY, API.ADD);
export const useAddClick_whatsapp = () => useAddMutation(KEY2, API.ADD2);