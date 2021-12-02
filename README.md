![LJ BRAND](https://user-images.githubusercontent.com/91661118/144402490-add10012-0c2b-42bb-8d9f-c5e215cf3d7e.png)

# 🎅🎄✔️ lj-brand used with QBCore Framework ✅🦌🤶
Join my Discord laboratory for updates, support, and special early testing!
<br>
https://discord.gg/loljoshie (without-vanity url: https://discord.gg/HH6uTcBfew)

Very simple checklist system for newcomers and toggleable in-game command branding logo. Written in Vue.js
<br>
Runs at ~ 0.00 ms

# Dependencies
* [qbcore framework](https://github.com/qbcore-framework)
* [interact-sound](https://github.com/qbcore-framework/interact-sound) (if you want sound effects)

## Event: All you need is this event. It can go pretty much anywhere.
```lua
TriggerEvent('lj-brand:client:open')
```
## Example:
#### I'd recommend putting it in qb-clothing where newcomers first create their characters on the server.
* Find this in **qb-clothing/client.lua/RegisterNetEvent('qb-clothes:client:CreateFirstCharacter')**
* And replace with this instead
```lua
RegisterNetEvent('qb-clothes:client:CreateFirstCharacter')
AddEventHandler('qb-clothes:client:CreateFirstCharacter', function()
    QBCore.Functions.GetPlayerData(function(PlayerData)
        local skin = "mp_m_freemode_01"
        openMenu({
            {menu = "character", label = "Character", selected = true},
            {menu = "clothing", label = "Features", selected = false},
            {menu = "accessoires", label = "Accessories", selected = false}
        })

        if PlayerData.charinfo.gender == 1 then 
            skin = "mp_f_freemode_01" 
        end
        
        ChangeToSkinNoUpdate(skin)
        SendNUIMessage({
            action = "ResetValues",
        })
    end)
        Wait(1200)
        TriggerEvent('lj-brand:client:open')
end)
```

# Key Features
* Configurable logo (/logo)
* Toggleable logo
* Checkboxes react when focused / checked
* Checklist requires you to checkmark all boxes
* Button is disabled until requirements are met.
* Easy to use and customize. For people that just want all branding in one place, and allow community to choose if they want to see the branding logo of the server while playing.
* (This entire script was just an excuse so I can play around with Vue more ❤️)
#

# Previews
### where to edit (html) and config
![config html](https://user-images.githubusercontent.com/91661118/144399653-301103f3-5b15-4b83-86b9-cc56c1ae7689.PNG)
![config lua](https://user-images.githubusercontent.com/91661118/144399687-0e3aa6d9-a493-4dfd-8af8-4d0a71c89625.PNG)
### checklist completed / not completed
![checklist](https://user-images.githubusercontent.com/91661118/144400484-fe5734fb-af43-45a8-be4c-4dcdac7e642d.png)
### checklist gif
![checklist gif](https://user-images.githubusercontent.com/91661118/144400634-44705317-eb68-4872-b2ba-ac1071fea607.gif)
### checklist clothing example
![checklist example](https://user-images.githubusercontent.com/91661118/144400792-a8679b3e-9e6c-4f0c-85e0-56ccfcdf92eb.png)

# Change Logs

### 1.0
* Initial release

# Issues and Suggestions
Please use the GitHub issues system to report issues or make suggestions, when making suggestion, please keep [Suggestion] in the title to make it clear that it is a suggestion.
