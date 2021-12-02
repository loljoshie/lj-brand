local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Commands.Add("logo", "Show logo branding", {}, false, function(source, args)
    TriggerClientEvent("lj-brand:client:Logo", source)
end)