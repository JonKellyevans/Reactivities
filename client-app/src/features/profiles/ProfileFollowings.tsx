import { observer } from 'mobx-react-lite';
import React from 'react';
import { CardGroup, Grid, GridColumn, Header, Tab } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/loadingComponent';
import { useStore } from '../../app/stores/store';
import ProfileCard from './ProfileCard';

export default observer(function ProfileFollowings(){
    
    const {profileStore} = useStore();
    const {profile, followings, loadingFollowings, activeTab} = profileStore;

    if (loadingFollowings) return <LoadingComponent content='Loading followers ...' />

    return (
        
        <Tab.Pane loading={loadingFollowings}>
            <Grid>
                <GridColumn width={16}>
                    <Header floated='left' icon='user' content={activeTab === 3 ? `People following ${profile?.displayName}` : `People ${profile?.displayName} is following`} />
                </GridColumn>
                <GridColumn width={16}>
                    <CardGroup itemsPerRow={4}>
                        {followings.map(profile => (
                            <ProfileCard key={profile.username} profile={profile}/>
                        ))}
                    </CardGroup>
                </GridColumn>
            </Grid>
        </Tab.Pane>
    )

})