// Add script to replace all urls
if( process.env.NODE_ENV === 'development' ) {
  require('./scripts/dev-env');
}

// Add theme style
import './styles/index.scss'

// import any javascript here
