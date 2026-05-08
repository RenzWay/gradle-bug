export const BUG_DATA = [
  {
    id: "gradle-app",
    title: "📱 Gradle:app",
    image: "./gradle_app.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.parcelize)
}`
  },
  {
    id: "gradle-module",
    title: "📦 Gradle:module",
    image: "./gradle_project.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.parcelize) apply false
}`
  },
  {
    id: "libs-version",
    title: "📚 libs.versions.toml",
    image: "./lib_version.png",
    subTitle: "Version Configuration",
    code: `kotlin-parcelize = { 
    id = "org.jetbrains.kotlin.plugin.parcelize", 
    version.ref = "kotlin" 
}`
  }
];

export const ICONS_DATA = [
   {
    id: "gradle-app",
    title: "📱 Gradle:app",
    image: "./gradle-app-icons.png",
    subTitle: "Implementation Code",
    code: `
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.compose.material.icons.extended)
`
  },
    {
    id: "libs-version",
    title: "📚 libs.versions.toml",
    image: "./lib-version-icons.png",
    subTitle: "Version Configuration",
    code: `
    androidx-compose-material3 = { group = "androidx.compose.material3", name = "material3" }
    androidx-compose-material-icons-extended = { group = "androidx.compose.material", name = "material-icons-extended" }`
  }
]