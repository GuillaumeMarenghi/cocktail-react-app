export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_SEND = 'SEARCH_SEND';

export const searchInputChange = (payload) => ({
    type: SEARCH_INPUT_CHANGE,
    payload
});

export const searchSend = () => ({
    type: SEARCH_SEND,
})