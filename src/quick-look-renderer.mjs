import {startPreview} from './quick-look.mjs';

await startPreview({render:async({ink,file,root})=>{
 const meta=JSON.parse(file.body),title=document.createElement('h2');title.textContent=file.title;root.append(title);
 const body=document.createElement('div');root.append(body);
 const paint=records=>{
  const rows=records.map(record=>JSON.parse(record.body)),keys=meta.columns?.map(column=>column.key)||[...new Set(rows.flatMap(row=>Object.keys(row.values||{})))];
  const table=document.createElement('table'),header=document.createElement('tr');
  for(const key of ['Key',...keys]){const cell=document.createElement('th');cell.textContent=key;header.append(cell);}table.append(header);
  for(const row of rows){const line=document.createElement('tr');for(const value of [row.key,...keys.map(key=>row.values?.[key])]){const cell=document.createElement('td');cell.textContent=typeof value==='object'?JSON.stringify(value):String(value??'');line.append(cell);}table.append(line);}body.replaceChildren(table);
  if(!rows.length){const empty=document.createElement('p');empty.textContent='No rows yet.';body.append(empty);}
 };
 if(file.kind==='ink-table-row'){paint([file]);return;}
 const subscription=ink.world.watch({namespace:file.namespace,kind:'ink-table-row',tag:'ink-table:'+file.id,limit:1000},result=>paint(result.objects));await subscription.ready;return()=>subscription.unsubscribe();
}});
