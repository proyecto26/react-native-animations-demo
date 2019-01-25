import {
  StyleSheet,
  Platform
} from 'react-native'

const backgroundColor = 'white'
const borderColor = '#D3D3D3'

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 3
  },
  barChartContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    overflow: 'hidden',
    justifyContent: 'space-between',
    maxWidth: 400,
    borderWidth: 1,
    borderColor,
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor,
  },
  labelBottom: {
    height: 20,
    textAlign: 'center',
    backgroundColor,
  },
  borderLine: {
    width: '100%',
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: 'black',
    bottom: 20
  },
  animateTitle: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'Verdana' : 'Roboto',
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold'
  }
});