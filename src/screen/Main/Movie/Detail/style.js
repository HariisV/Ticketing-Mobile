import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  containerChild: {
    margin: 20,
  },

  imageViewContainer: {
    padding: 40,
    margin: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
  },
  imageView: {
    alignSelf: 'center',
    width: '100%',
    height: 400,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  buttonBook: {
    backgroundColor: '#5F2EEA',
    padding: 15,
    borderRadius: 5,
    paddingHorizontal: '38%',
    marginBottom: 30,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
  },
  buttonBookText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonBookLocked: {
    backgroundColor: '#9985d0',
    padding: 15,
    borderRadius: 5,
    paddingHorizontal: '38%',
    marginBottom: 30,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
  },
  textJoin: {
    textAlign: 'center',
    marginHorizontal: 40,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Mulish-Reguler',
  },
  movieGenre: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    fontFamily: 'Mulish-Reguler',
    marginBottom: 30,
  },
  hr: {
    borderBottomColor: '#D6D8E7',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  movieDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  movieDetailItem: {
    marginHorizontal: 10,
    width: 140,
  },
  detailQuenst: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#8692A6',
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    fontWeight: '200',
    color: '#121212',
  },
  movieSypnosisTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Mulish-Reguler',
  },
  movieSypnosis: {
    fontSize: 15,
    marginBottom: 60,
    color: '#4E4B66',
    fontFamily: 'Mulish-Medium',
    fontWeight: '400',
    lineHeight: 24,
  },
  scheduleTitle: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginBottom: 30,
  },
  showtimesContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  inputTimes: {
    borderColor: '#EFF0F6',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#EFF0F6',
    borderRadius: 15,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    // paddingHorizontal: 20,
    fontSize: 25,
    // padding: 50,
  },
  valueInput: {
    margin: 15,
    fontSize: 15,
    alignItems: 'center',
    // position: 'absolute',
    // top: 30,
    color: 'black',
  },
  scheduleCard: {
    borderColor: '#EFF0F6',
    borderWidth: 2,
    padding: 30,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 541,
    shadowRadius: 244,
    backgroundColor: 'white',
    display: 'flex',
    // marginHorizontal: 20,

    // alignItems: 'center',
  },
  scheduleImageContainer: {
    alignItems: 'center',
  },
  scheduleImage: {
    width: 100,
    height: 50,
    marginBottom: 10,
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
  },
  scheduleList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scheduleListItem: {
    marginRight: '3%',
    marginBottom: 5,
    padding: 3,
    margin: 3,
    flexWrap: 'nowrap',
    color: '#A0A3BD',
    color: '#4E4B66',
    fontSize: 15,
    fontFamily: 'Mulish-Reguler',
    fontWeight: '600',
  },
  scheduleAddress: {
    fontSize: 17,
    width: 230,
    textAlign: 'center',
    fontFamily: 'Mulish-Reguler',
    fontWeight: '600',
  },
  schedulePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  schedulePrice: {
    fontSize: 18,
  },
  schedulvePriceValue: {
    fontSize: 18,
    fontFamily: 'Mulish-Reguler',
    color: 'black',
    fontWeight: '700',
    marginRight: 20,
  },
  timeActive: {
    backgroundColor: '#5F2EEA',
    color: 'white',
    padding: 3,
    margin: 3,

    textAlign: 'center',
  },
});

export default styles;