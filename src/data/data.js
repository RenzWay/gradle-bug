export const BUG_DATA = [
  {
    id: "gradle-app",
    title: "📱 Gradle:app",
    image: "./gradle_app.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.parcelize)
}`,
  },
  {
    id: "gradle-module",
    title: "📦 Gradle:module",
    image: "./gradle_project.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.parcelize) apply false
}`,
  },
  {
    id: "libs-version",
    title: "📚 libs.versions.toml",
    image: "./lib_version.png",
    subTitle: "Version Configuration",
    code: `kotlin-parcelize = { 
    id = "org.jetbrains.kotlin.plugin.parcelize", 
    version.ref = "kotlin" 
}`,
  },
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
`,
  },
  {
    id: "libs-version",
    title: "📚 libs.versions.toml",
    image: "./lib-version-icons.png",
    subTitle: "Version Configuration",
    code: `
    androidx-compose-material3 = { group = "androidx.compose.material3", name = "material3" }
    androidx-compose-material-icons-extended = { group = "androidx.compose.material", name = "material-icons-extended" }`,
  },
];

export const COMPOSE_PARCELIZE_DATA = [
  {
    id: "gradle_app",
    title: "📱 Gradle:app",
    image: "./build-gradle-app-parcelize.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
    alias(libs.plugins.kotlin.parcelize)
  }
    `,
  },
  {
    id: "gradle-module",
    title: "📦 Gradle:module",
    image: "./build-gradle-project-parcelize.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
    alias(libs.plugins.kotlin.parcelize) apply false
}`,
  },
  {
    id: "libs-version",
    title: "📚 libs.versions.toml",
    image: "./lib-version-parcelize.png",
    subTitle: "Version Configuration",
    code: `android-application = { id = "com.android.application", version.ref = "agp" }
kotlin-compose = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
kotlin-android = { id = "org.jetbrains.kotlin.android", version.ref = "kotlin" }
kotlin-parcelize = { id = "org.jetbrains.kotlin.plugin.parcelize", version.ref = "kotlin" }
`,
  },
  {
    id: "gradle-properties",
    title: "gradle.properties (opsional)",
    image: "./gradle-properties-parcelize.png",
    subTitle: "Implementation Code",
    code: `kotlin.code.style=official

android.builtInKotlin=false
android.newDsl=false
`,
  },
];

export const ROOM_LIBRARY = [
  {
    id: "gradle-app",
    title: "📱 Gradle:app",
    image: "./build-gradle-app-room.png",
    subTitle: "Implementation Code",
    code: `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.compose)
    id("com.google.devtools.ksp")
}

dependencies {
    implementation(libs.androidx.compose.runtime.livedata)
    implementation(libs.androidx.lifecycle.viewmodel.ktx)
    implementation(libs.lifecycle.livedata.ktx)
    implementation(libs.androidx.room.runtime)
    ksp(libs.room.compiler)
    }`,
  },
  {
    id: "gradle-module",
    title: "📦 Gradle:module",
    image: "./build-gradle-project-room.png",
    subTitle: "Implementation Code",
    code:`plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.compose) apply false
    id("com.google.devtools.ksp") version "2.3.2" apply false
}
    `
  },
  {
    id: "libs-version",
    title: "📚 libs.versions.toml",
    image: "./lib-version-room.png",
    subTitle: "Version Configuration",
    code: `
    [version]
    lifecycleLivedataKtx = "2.10.0"
    lifecycleViewmodelKtx = "2.10.0"
    roomCompiler = "2.8.4"
    roomRuntime = "2.8.4"
    runtimeLivedata = "1.11.2"
    
    [libraries]
    androidx-lifecycle-viewmodel-ktx = { module = "androidx.lifecycle:lifecycle-viewmodel-ktx", version.ref = "lifecycleViewmodelKtx" }
    androidx-room-runtime = { module = "androidx.room:room-runtime", version.ref = "roomRuntime" }
    room-compiler = { module = "androidx.room:room-compiler", version.ref = "roomCompiler" }
    androidx-compose-runtime-livedata = { group = "androidx.compose.runtime", name = "runtime-livedata", version.ref = "runtimeLivedata" }
    lifecycle-livedata-ktx = { module = "androidx.lifecycle:lifecycle-livedata-ktx", version.ref = "lifecycleLivedataKtx" }

    `
  }
];
