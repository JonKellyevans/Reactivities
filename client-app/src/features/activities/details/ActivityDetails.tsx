import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/loadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsSideBar from './ActivityDetailsSideBar';


export default observer (function ActivityDetails()
{
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {        
        if (id) loadActivity(id);
        return clearSelectedActivity();
    }, [id, loadActivity,clearSelectedActivity]);

    if (loadingInitial || !activity) return <LoadingComponent content='Loading Application' />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat activityId={activity.id}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailsSideBar activity={activity} />
            </Grid.Column>
        </Grid>

    )
})
