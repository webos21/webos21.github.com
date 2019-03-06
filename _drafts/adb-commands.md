---
layout: post
title: "ADB : useful commands"
categories: Android
tags:  Android, adb
---

* content
{:toc}


#### Make a screen-shot and get it

```bash
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png
adb shell rm /sdcard/screen.png
```


#### Stay the screen on always 

```bash
adb shell svc power stayon usb
```


#### Time Sync 

```bash
# Time Sync (0 = Off / 1 = Network)
adb shell settings put global auto_time 1
```


#### Reboot/Halt 

```bash
# REBOOT : Same as "shutdown -r now" 
adb shell reboot

# HALT : Same as "shutdown -h" 
adb shell reboot -p
```


#### Volumes 

```bash
# Get the volume settings
adb shell dumpsys audio

# Change the volume by the key-event
#  - Volume Up   : 24
#  - Volume Down : 25
adb shell input keyevent 24

# Change the volume by the service-call
#  - audio 7 : interface IAudioService
#  - i32 3 : Speaker  (1: Phone 3: Speaker 4: alarm 6: Bluetooth)
#  - i32 0 : UI print Off (1 : UI print On)
#  - i32 1 : Volume Level (0 ~ 15)
adb shell service call audio 7 i32 3 i32 0 i32 1
```


#### Open the web-page 

```bash
adb shell am start -a android.intent.action.VIEW -d http://m.youtube.com
```


#### Open the Settings UI 

```bash
adb shell am start -a android.settings.SETTINGS
```


#### Set the Time (Rooting required)

```bash
# 2018-11-20 18:40:00
adb shell su -c "date -s 20181120.184000"
```
