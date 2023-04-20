import { SportsBasketball, SportsTennis, DirectionsBike, Pool, LocalDining, Hiking, DirectionsRun, Hotel, FitnessCenter, DirectionsWalk, LocalDrink, SelfImprovement } from '@mui/icons-material';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DancingLogo from '../Assets/LeaderboardIcons/dancing-icon.svg'
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NoFoodIcon from '@mui/icons-material/NoFood';
import SupportIcon from '@mui/icons-material/Support';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

export const getLeaderboardIcons = (activityId) =>{
    switch (activityId) {
        case 1: return <SportsTennis fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 2: return <AutoStoriesIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 3: return <AssignmentTurnedInIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 4: return <img src={DancingLogo} alt='logo' className='leaderboard-logo'/>;
        case 5: return <NoFoodIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 6: return <WorkIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 7: return <SupportIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 8: return <BedtimeIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 9: return <FitnessCenter fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 10: return <VolunteerActivismIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 11: return <DirectionsWalk fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 12: return <LocalDrinkIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        case 13: return <SelfImprovementIcon fontSize='large' color='primary' className='leaderboard-logo'/>;
        default: break;
    }
}