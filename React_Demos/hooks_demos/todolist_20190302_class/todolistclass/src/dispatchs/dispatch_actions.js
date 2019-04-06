//UI to action(通过dispatch)
import { action_names } from '../action/action_names';

export function mapDispatchToProps(dispatch) {
    return {
        //示例
        onClick: (data) => dispatch({
            type: 'click',
            data
        }),
        addToDoItem: (data) => {
            dispatch({
                type: action_names.ADDTODOITEM,
                data
            });
        },
        delToDoItem: (data) => {
            dispatch({
                type: action_names.DELTODOITEM,
                data
            });
        },
        resetToDoItem: (data) => {
            dispatch({
                type: action_names.RESETODOITEM,
                data
            });
        },
        switchToDoItem: (data) => {
            dispatch({
                type: action_names.SWITCHTODOITEM,
                data
            });
        }
    }
}