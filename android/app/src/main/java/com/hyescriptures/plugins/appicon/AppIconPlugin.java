package com.hyescriptures.plugins.appicon;

import android.content.ComponentName;
import android.content.pm.PackageManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "AppIcon")
public class AppIconPlugin extends Plugin {

    private static final String[] ALIASES = {
        "Kingdom", "Messiah", "Rose", "Ocean", "Genesis", "Heaven", 
        "Eden", "Eclipse", "Sapphire", "Midnight", "Amethyst", 
        "Aurora", "Glory", "Judgement", "Moonlight", "Sunrise"
    };

    @PluginMethod
    public void change(PluginCall call) {
        String icon = call.getString("icon", "default");
        
        PackageManager pm = getContext().getPackageManager();
        String packageName = getContext().getPackageName();
        
        // Disable all aliases first
        for (String alias : ALIASES) {
            ComponentName component = new ComponentName(packageName, packageName + ".MainActivity" + alias);
            pm.setComponentEnabledSetting(
                component,
                PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                PackageManager.DONT_KILL_APP
            );
        }
        
        // Disable default activity
        ComponentName defaultActivity = new ComponentName(packageName, packageName + ".MainActivity");
        pm.setComponentEnabledSetting(
            defaultActivity,
            PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
            PackageManager.DONT_KILL_APP
        );
        
        if (icon.equals("default")) {
            // Enable default
            pm.setComponentEnabledSetting(
                defaultActivity,
                PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                PackageManager.DONT_KILL_APP
            );
        } else {
            // Capitalize first letter to match alias name
            String aliasName = icon.substring(0, 1).toUpperCase() + icon.substring(1);
            ComponentName selectedAlias = new ComponentName(packageName, packageName + ".MainActivity" + aliasName);
            pm.setComponentEnabledSetting(
                selectedAlias,
                PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                PackageManager.DONT_KILL_APP
            );
        }
        
        JSObject ret = new JSObject();
        ret.put("success", true);
        ret.put("icon", icon);
        call.resolve(ret);
    }
    
    @PluginMethod
    public void getCurrent(PluginCall call) {
        PackageManager pm = getContext().getPackageManager();
        String packageName = getContext().getPackageName();
        
        ComponentName defaultActivity = new ComponentName(packageName, packageName + ".MainActivity");
        int defaultState = pm.getComponentEnabledSetting(defaultActivity);
        
        if (defaultState == PackageManager.COMPONENT_ENABLED_STATE_ENABLED) {
            JSObject ret = new JSObject();
            ret.put("icon", "default");
            call.resolve(ret);
            return;
        }
        
        for (String alias : ALIASES) {
            ComponentName component = new ComponentName(packageName, packageName + ".MainActivity" + alias);
            int state = pm.getComponentEnabledSetting(component);
            if (state == PackageManager.COMPONENT_ENABLED_STATE_ENABLED) {
                JSObject ret = new JSObject();
                ret.put("icon", alias.toLowerCase());
                call.resolve(ret);
                return;
            }
        }
        
        JSObject ret = new JSObject();
        ret.put("icon", "default");
        call.resolve(ret);
    }
}
