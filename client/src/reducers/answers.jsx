import { ADD_ANSWER, HANDLE_ANSWERS } from "actions/constants";

const initialState = {
  polls: [
    {
      name: "question 1",
      voted: false,
      id: 1,
      answers: [
          {
            text: "answer1",
            votes: 211,
            id: "1"
          },
          {
            text: "answer2",
            votes: 111,
            id: "2"
          },
          {
            text: "answer2",
            votes: 355,
            id: "3"
          },
          {
            text: "answer2",
            votes: 200,
            id: "4"
          },
          {
            text: "answer5",
            votes: 115,
            id: "5"
          }
        ],
    },
    {
      name: "question 2",
      voted: true,
      id: 2, 
      answers:[
        {
          text: "answer1",
          votes: 3,
          id: "6"
        },
        {
          text: "answer2",
          votes: 1,
          id: "7"
        },
        {
          text: "answer2",
          votes: 4,
          id: "8"
        },
        {
          text: "answer2",
          votes: 6,
          id: "9"
        },
        {
          text: "answer5",
          votes: 11,
          id: "10"
        }
      ],
    }
  ],
};


export const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
    console.log(action)
      return {
        ...state,
        polls: [
          {
            ...state.polls,
            answers: [
              {
                ...state.polls.answers,
                votes:  action.count + 1,
                
              }
            ]
            
          }
        ]
        
      }
    case HANDLE_ANSWERS:
      return {
        ...state,
        polls: [
          {

          }
        ]
      }
    default:
      return state;
  }
};


