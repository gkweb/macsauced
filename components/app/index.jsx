import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Settings from './../settings/'
import TopNavBar from './../topNavBar/'
import NotifyBar from './../notifyBar/'
import Home from './../home/'

const pages = {
  'Settings': Settings,
  'Home': Home
}

const TopPointer = () => (
  <div className={css(styles.topPointer)}></div>
)

class App extends Component {
  render () {
    const CurrentPage = pages[this.props.state.settings.currentPage]
    return (
      <div className={css(styles.mainWindow)}>
        <TopPointer />
        <NotifyBar message={this.props.state.notify}/>
        <div className={css(styles.seedContainer)}>
          <div>
            <TopNavBar {...this.props}/>
            <CurrentPage {...this.props}/>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  seedContainer: {
    boxSizing: 'border-box',
    padding: '1em',
    borderRadius: '.5em',
    position: 'absolute',
    top: '5px',
    left: '0',
    right: '0',
    height: 'calc(100vh - 5px)',
    backgroundColor: 'black',
    overflowY: 'auto',
    overflowX: 'auto'
  },
  mainWindow: {

  },
  settingsBtn: {
    background: 'none',
    border: 0,
    outline: 0,
    fontSize: '1em',
    cursor: 'pointer',
    color: '#999',
    transition: 'color .2s ease-in-out',
    ':focus': {
      outline: 0,
      color: '#8c194f'
    },
    ':hover': {
      color: '#8c194f'
    }
  },
  topBar: {
    display: 'flex',
    padding: '1em 0',
    marginBottom: '1em',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #999'
  },
  topBarCell: {
    display: 'flex',
    color: '#999'
  },
  deviceName: {
    display: 'block',
    marginLeft: '.5em'
  },
  mainTitle: {
    textAlign: 'center',
    margin: '0 0 .5em 0',
    fontSize: '2em',
    lineHeight: '110%'
  },
  mainButton: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    padding: '1em',
    boxSizing: 'border-box',
    border: '0',
    textAlign: 'center',
    borderRadius: '.1em',
    cursor: 'pointer',
    backgroundColor: '#ff66d2',
    fontWeight: 'bold',
    transition: 'background-color .2s ease-in-out',
    ':focus': {
      outline: '0',
      border: '0',
      backgroundColor: '#8c194f'
    },
    ':hover': {
      backgroundColor: '#8c194f'
    }
  },
  topPointer: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid black',
    zIndex: 10
  }
})

export default App
