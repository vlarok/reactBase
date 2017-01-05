import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
let ServerActions={


  receiveLinks(links){
      console.log("2. ServerActions");
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVE_LINKS,
        links
      });

  }
};
export default ServerActions;
