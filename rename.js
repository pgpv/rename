function property( data, oldName, newName )
{
  if( Array.isArray( data ) )
  {
    for ( let i = 0; i < data.length; i++ )
    {
      if ( data[ i ].hasOwnProperty( oldName ) )
      {
        data[ i ][ newName ] = data[ i ][ oldName ];
        delete data[ i ][ oldName ];
      }
    }
  }
  else
  {
    if ( data.hasOwnProperty( oldName ) )
    {
      data[ newName ] = data[ oldName ];
      delete data[ oldName ];
    }
  }
}
