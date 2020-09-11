import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

/*
 * Create an instance of MatchReader and pass in something
 * satisfying the 'DataReader' interface
 */
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

/*
 * Combine the above two calls with a preconfigured
 * static method (without using 'new')
 * Static methods can be used on the class itself,
 * without having to first create an instance
 */
const matchReader = MatchReader.fromCsv('football.csv');

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );

// Using the static method in Summary (do not use 'new')
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
