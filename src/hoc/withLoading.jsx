import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const withLoading = (Component) =>{
    function ComponentWithLoading(props){

        const { item } = props;

        if (item.length === 0){
            return(
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /> 
                    Cargando...
                </Button>
            )
        }

        return <Component {...props}/>
    }

    return ComponentWithLoading 
}