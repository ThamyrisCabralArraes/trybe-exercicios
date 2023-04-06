export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

const requestSuccessful = (character) => ({
  type: REQUEST_SUCCESSFUL,
  character,
});

export const fetchCharacter = (personagem) => {
  // console.log(personagem);
  return async (dispatch) => {
    const response = await fetch(
      `https://anapioficeandfire.com/api/characters?name=${personagem}`,
    );
    const data = await response.json();
    dispatch(requestSuccessful(data));
  };
};
