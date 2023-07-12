package com.ammocanindustries;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;



import android.os.Bundle;
import android.util.Log;

import com.blitzapp.animatedsplash.animation.Splash;
import com.blitzapp.animatedsplash.animation.GroupAnimation;

import static com.blitzapp.animatedsplash.animation.AnimatedText.FIT_CENTER;
import static com.blitzapp.animatedsplash.animation.AnimatedText.FIT_END;
import static com.blitzapp.animatedsplash.animation.AnimatedText.FIT_XY;
import static com.blitzapp.animatedsplash.animation.Constants.FADE;
import static com.blitzapp.animatedsplash.animation.Constants.SCALE;
import static com.blitzapp.animatedsplash.animation.Constants.SPLASH_SLIDE_DOWN;
import static com.blitzapp.animatedsplash.animation.Constants.SPLASH_SLIDE_RIGHT;
import static com.blitzapp.animatedsplash.animation.Constants.SPLASH_FADE;
import static com.blitzapp.animatedsplash.animation.Splash.screenHeight;
import static com.blitzapp.animatedsplash.animation.Splash.screenWidth;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AmmoCanIndustries";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    
    public void onCreate(Bundle saved) {
      super.onCreate(saved);
      try {
        initiateSplash();
      } catch (Exception e) {
        Log.e("ANIMATED_SPLASH", e.getMessage());
      }
    }

    public void initiateSplash() throws Exception {

      Splash splash = new Splash(getContext());

      splash.setBackgroundImage(R.drawable.splash);

      splash.setSplashHideAnimation(SPLASH_SLIDE_DOWN);
      splash.setSplashHideDelay(1000);

      splash.ShowSplash();

    }
  }
}
