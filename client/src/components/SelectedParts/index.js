import SelectedParts from "../../pages/SelectedParts";;

const DisplayParts = ({computerPart}) => {
    const [state, dispatch] = useStoreContext();

    const {
        _id, 
        name, 
        price, 
        description
    } = computerPart;

    const { selection } = state
    
    const selectedParts = () => {
        const selectedPart = selection.find((selectPart) => selectPart._id === _id)
        if (selection) {
            dispatch({
                type: ADD_ORDER,
                product: { ...computerPart}
            });
            idbPromise('selection', 'put', { ...computerPart });
            }
        }

    const [addOrder, {data}] = useMutation(ADD_ORDER)
    }