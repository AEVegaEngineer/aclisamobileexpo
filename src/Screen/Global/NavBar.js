const styles = {
  container: {
    flex: 1,
  },
};

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Hello, world',
};

export default function ComponentWithNavigationBar() {
  return (
    <View style={styles.container}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
    </View>
  );
}