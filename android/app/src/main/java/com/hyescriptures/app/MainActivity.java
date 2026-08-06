package com.hyescriptures.app;

import com.getcapacitor.BridgeActivity;
import com.hyescriptures.plugins.appicon.AppIconPlugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AppIconPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
