import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------



export function fCurrency(number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00');
}

export function fPercent(number) {
  return numeral(number / 100).format('0.0%');
}

export function fNumber(number) {
  return numeral(number).format();
}

export function fShortenNumber(number) {
  return replace(numeral(number).format('0.00a'), '.00', '');
}

export function fData(number) {
  return numeral(number).format('0.0 b');
}

export function numberSeparator( Number ) {
  Number += "";
  Number = Number.replace( "," , "" );
  const x = Number.split( "." );
  let y = x[ 0 ];
  const z = x.length > 1 ? "." + x[ 1 ] : "";
  let rgx = /(\d+)(\d{3})/;
  while ( rgx.test( y ) )
    y = y.replace( rgx , "$1" + "," + "$2" );
  return y + z;
}