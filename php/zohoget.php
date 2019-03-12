<?php>
$apiResponse=ZCRMModule::getInstance('Leads')->getRecord(3379622000002220001); // 410405000001519001 - Lead Id
$record=$apiResponse->getData();
echo $record->getEntityId();
echo $record->getModuleApiName();
echo $record->getLookupLabel();
echo $record->getCreatedBy()->getId();
echo $record->getModifiedBy()->getId();
echo $record->getOwner()->getId();
echo $record->getCreatedTime();
echo $record->getModifiedTime();
$map=$record->getData();
foreach ($map as $key=>$value)
{
if($value instanceof ZCRMRecord)
{
echo "\n".$value->getEntityId().":".$value->getModuleApiName().":".$value->getLookupLabel();
}
else
{
echo $key.":".$value;
}
}
