import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: Metrics.screenWidth * 0.75,
  },
  buttonStyle: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
})
