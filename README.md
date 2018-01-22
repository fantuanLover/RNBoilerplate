# RNBoilerplate
RN脚手架，集成了redux+react-router-native+react-native-vector-icons<br />
直接运行，图标不会显示，这里给出android的适配方案<br />
1.编辑 android/app/build.gradle ( 不是 android/build.gradle ) 在最后一行加上 :<br />
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"<br />
2.删除 ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
