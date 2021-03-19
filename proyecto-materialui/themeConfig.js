import { createMuiTheme } from '@material-ui/core'
import lightGreen from '@material-ui/core/colors/lightGreen'
import purple from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightGreen[900]
        },
        secondary: {
            main: purple[500]
        }
    }
})

export default theme