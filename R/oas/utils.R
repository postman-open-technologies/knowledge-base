
format_count = function(n) {
  return(format(n, big.mark = ","))
}

format_pct = function(pct) {
  return(format(round(pct*100,1)))
}

format_count_and_pct = function(n, pct) {
  return(sprintf("%s (%s%%)",format_count(n), format_pct(pct)))
}