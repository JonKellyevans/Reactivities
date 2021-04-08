import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default observer (function ServerError() {
    const {commonStore} = useStore();

    return (
        <Container>
            <Header as='h1' content='Server Error'></Header>
            <Header sub as='h5' color='red' content={commonStore.error?.message} />
            {commonStore.error?.stackTrace && 
                <Segment>
                    <Header as='h4' content='Stack Trace - please copy the information below in your email to IT support.' color='teal'/>
                    <code style={{marginTop: '10px'}}>{commonStore.error.stackTrace}</code>
                    <Segment>
                        <Button as={Link} to='/activities' primary>
                            Return to Activities page
                        </Button>
                    </Segment>
                </Segment>
                
                }
        </Container>
    )
})