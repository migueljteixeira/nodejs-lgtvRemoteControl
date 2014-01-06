LG Smart TV Remote Control - NodeJS Client
====================

Control your LG Smart TV with NodeJS, it's so simple!

You'll need node.js to run it. Get it at [www.nodejs.org](http://www.nodejs.org).

Next, run lgtv_remoteControl.js through node program:

    $ node lgtv_remoteControl.js

And that's it!

### Configuration

You'll need to change the address IP. You can access the IP address of the LG Smart TV in the router page or by running the discover function present on the requests.js file.

You can access the following characterKeys

    KEY_IDX_3D                      characterKey=400
    KEY_IDX_ARROW_DOWN              characterKey=13
    KEY_IDX_ARROW_LEFT              characterKey=14
    KEY_IDX_ARROW_RIGHT             characterKey=15
    KEY_IDX_ARROW_UP                characterKey=12
    KEY_IDX_BACK                    characterKey=23
    KEY_IDX_BLUE                    characterKey=29
    KEY_IDX_CH_DOWN                 characterKey=28
    KEY_IDX_CH_UP                   characterKey=27
    KEY_IDX_DATA                    characterKey=472
    KEY_IDX_ENTER                   characterKey=20
    KEY_IDX_EXIT                    characterKey=412
    KEY_IDX_EXTERNAL_INPUT          characterKey=47
    KEY_IDX_FORWARD                 characterKey=36
    KEY_IDX_GAMEPAD_ARROW_DOWN      characterKey=2
    KEY_IDX_GAMEPAD_ARROW_LEFT      characterKey=3
    KEY_IDX_GAMEPAD_ARROW_RIGHT     characterKey=4
    KEY_IDX_GAMEPAD_ARROW_UP        characterKey=1
    KEY_IDX_GAMEPAD_BTN_1           characterKey=5
    KEY_IDX_GAMEPAD_BTN_2           characterKey=6
    KEY_IDX_GAMEPAD_BTN_3           characterKey=7
    KEY_IDX_GAMEPAD_BTN_4           characterKey=8
    KEY_IDX_GAMEPAD_MENU            characterKey=9
    KEY_IDX_GREEN                   characterKey=30
    KEY_IDX_HOME                    characterKey=21
    KEY_IDX_JP_BS                   characterKey=419
    KEY_IDX_JP_BS_NUM_1             characterKey=420
    KEY_IDX_JP_BS_NUM_10            characterKey=429
    KEY_IDX_JP_BS_NUM_11            characterKey=430
    KEY_IDX_JP_BS_NUM_12            characterKey=431
    KEY_IDX_JP_BS_NUM_2             characterKey=421
    KEY_IDX_JP_BS_NUM_3             characterKey=422
    KEY_IDX_JP_BS_NUM_4             characterKey=423
    KEY_IDX_JP_BS_NUM_5             characterKey=424
    KEY_IDX_JP_BS_NUM_6             characterKey=425
    KEY_IDX_JP_BS_NUM_7             characterKey=426
    KEY_IDX_JP_BS_NUM_8             characterKey=427
    KEY_IDX_JP_BS_NUM_9             characterKey=428
    KEY_IDX_JP_CS1                  characterKey=432
    KEY_IDX_JP_CS1_NUM_1            characterKey=433
    KEY_IDX_JP_CS1_NUM_10           characterKey=442
    KEY_IDX_JP_CS1_NUM_11           characterKey=443
    KEY_IDX_JP_CS1_NUM_12           characterKey=444
    KEY_IDX_JP_CS1_NUM_2            characterKey=434
    KEY_IDX_JP_CS1_NUM_3            characterKey=435
    KEY_IDX_JP_CS1_NUM_4            characterKey=436
    KEY_IDX_JP_CS1_NUM_5            characterKey=437
    KEY_IDX_JP_CS1_NUM_6            characterKey=438
    KEY_IDX_JP_CS1_NUM_7            characterKey=439
    KEY_IDX_JP_CS1_NUM_8            characterKey=440
    KEY_IDX_JP_CS1_NUM_9            characterKey=441
    KEY_IDX_JP_CS2                  characterKey=445
    KEY_IDX_JP_CS2_NUM_1            characterKey=446
    KEY_IDX_JP_CS2_NUM_10           characterKey=455
    KEY_IDX_JP_CS2_NUM_11           characterKey=456
    KEY_IDX_JP_CS2_NUM_12           characterKey=457
    KEY_IDX_JP_CS2_NUM_2            characterKey=447
    KEY_IDX_JP_CS2_NUM_3            characterKey=448
    KEY_IDX_JP_CS2_NUM_4            characterKey=449
    KEY_IDX_JP_CS2_NUM_5            characterKey=450
    KEY_IDX_JP_CS2_NUM_6            characterKey=451
    KEY_IDX_JP_CS2_NUM_7            characterKey=452
    KEY_IDX_JP_CS2_NUM_8            characterKey=453
    KEY_IDX_JP_CS2_NUM_9            characterKey=454
    KEY_IDX_JP_JS                   characterKey=458
    KEY_IDX_JP_JS_NUM_1             characterKey=459
    KEY_IDX_JP_JS_NUM_10            characterKey=468
    KEY_IDX_JP_JS_NUM_11            characterKey=469
    KEY_IDX_JP_JS_NUM_12            characterKey=470
    KEY_IDX_JP_JS_NUM_2             characterKey=460
    KEY_IDX_JP_JS_NUM_3             characterKey=461
    KEY_IDX_JP_JS_NUM_4             characterKey=462
    KEY_IDX_JP_JS_NUM_5             characterKey=463
    KEY_IDX_JP_JS_NUM_6             characterKey=464
    KEY_IDX_JP_JS_NUM_7             characterKey=465
    KEY_IDX_JP_JS_NUM_8             characterKey=466
    KEY_IDX_JP_JS_NUM_9             characterKey=467
    KEY_IDX_MENU                    characterKey=22
    KEY_IDX_MUTE                    characterKey=26
    KEY_IDX_MYAPPS                  characterKey=417
    KEY_IDX_NETCAST                 characterKey=408
    KEY_IDX_NUM_0                   characterKey=2
    KEY_IDX_NUM_1                   characterKey=3
    KEY_IDX_NUM_2                   characterKey=4
    KEY_IDX_NUM_3                   characterKey=5
    KEY_IDX_NUM_4                   characterKey=6
    KEY_IDX_NUM_5                   characterKey=7
    KEY_IDX_NUM_6                   characterKey=8
    KEY_IDX_NUM_7                   characterKey=9
    KEY_IDX_NUM_8                   characterKey=10
    KEY_IDX_NUM_9                   characterKey=11
    KEY_IDX_PAUSE                   characterKey=34
    KEY_IDX_PLAY                    characterKey=33
    KEY_IDX_POWER_OFF               characterKey=1
    KEY_IDX_PREV_CHANNEL            characterKey=403
    KEY_IDX_QMENU                   characterKey=405
    KEY_IDX_REC                     characterKey=40
    KEY_IDX_RED                     characterKey=31
    KEY_IDX_REWIND                  characterKey=37
    KEY_IDX_SIMPLELINK_DISC_MENU    characterKey=1
    KEY_IDX_SIMPLELINK_GUIDE        characterKey=4
    KEY_IDX_SIMPLELINK_HOME         characterKey=0
    KEY_IDX_SIMPLELINK_INFO_MENU    characterKey=2
    KEY_IDX_SIMPLELINK_POWER_ONOFF  characterKey=6
    KEY_IDX_SIMPLELINK_RECLIST      characterKey=5
    KEY_IDX_SIMPLELINK_TITLE_POPUP  characterKey=3
    KEY_IDX_SKIP_BACKWARD           characterKey=39
    KEY_IDX_SKIP_FORWARD            characterKey=38
    KEY_IDX_STB_BACK                characterKey=30
    KEY_IDX_STB_BLUE                characterKey=16
    KEY_IDX_STB_CH_DOWN             characterKey=38
    KEY_IDX_STB_CH_UP               characterKey=37
    KEY_IDX_STB_DASH                characterKey=19
    KEY_IDX_STB_DOWN                characterKey=34
    KEY_IDX_STB_EXIT                characterKey=7
    KEY_IDX_STB_FORWARD             characterKey=12
    KEY_IDX_STB_GREEN               characterKey=14
    KEY_IDX_STB_GUIDE               characterKey=2
    KEY_IDX_STB_LEFT                characterKey=35
    KEY_IDX_STB_MENU                characterKey=1
    KEY_IDX_STB_NUM0                characterKey=29
    KEY_IDX_STB_NUM1                characterKey=20
    KEY_IDX_STB_NUM2                characterKey=21
    KEY_IDX_STB_NUM3                characterKey=22
    KEY_IDX_STB_NUM4                characterKey=23
    KEY_IDX_STB_NUM5                characterKey=24
    KEY_IDX_STB_NUM6                characterKey=25
    KEY_IDX_STB_NUM7                characterKey=26
    KEY_IDX_STB_NUM8                characterKey=27
    KEY_IDX_STB_NUM9                characterKey=28
    KEY_IDX_STB_OK                  characterKey=18
    KEY_IDX_STB_PAUSE               characterKey=11
    KEY_IDX_STB_PLAY                characterKey=10
    KEY_IDX_STB_POWER_ONOFF         characterKey=0
    KEY_IDX_STB_REC                 characterKey=17
    KEY_IDX_STB_RED                 characterKey=13
    KEY_IDX_STB_REWIND              characterKey=8
    KEY_IDX_STB_RIGHT               characterKey=36
    KEY_IDX_STB_SKIP_BACKWARD       characterKey=61
    KEY_IDX_STB_SKIP_FORWARD        characterKey=62
    KEY_IDX_STB_STOP                characterKey=9
    KEY_IDX_STB_UP                  characterKey=33
    KEY_IDX_STB_YELLOW              characterKey=15
    KEY_IDX_STOP                    characterKey=35
    KEY_IDX_VOL_DOWN                characterKey=25
    KEY_IDX_VOL_UP                  characterKey=24
    KEY_IDX_YELLOW                  characterKey=32


### Information taken from

[https://github.com/ubaransel/lgcommander](https://github.com/ubaransel/lgcommander)
[http://developer.lge.com/resource/tv/RetrieveDocDevLibrary.dev](http://developer.lge.com/resource/tv/RetrieveDocDevLibrary.dev)