
function NetworkCtrl($scope, $http) {
  $scope.entries = [];
  $scope.data = '';
  $scope.startedTime = '';
  $scope.pageTimings = '';
  $scope.pageTimings.section = '';

  $scope.updateHar = function(data) {
    var entries = data.log.entries;
    data.count = data.log.entries.length;
    delete data.log.entries;
    $.each(entries, function(i, entry) {
      entries[i] = new HAREntry(entry, i, data);
    });
    $scope.entries = entries;
    $scope.data = data;
    $scope.startedTime = new Date(data.log.pages[0].startedDateTime).getTime();
    $scope.pageTimings = data.log.pages[0].pageTimings;
    $scope.pageTimings.section = $scope.pageTimings.onLoad / 12;
  }

  $scope.showDetails = function(i) {
    var $leftView = $('.split-view-sidebar-left');
    $('#network-views').removeClass('hidden')
    $('.panel.network').addClass('viewing-resource');
    $leftView.removeClass('maximized');
    console.log(i);
  }

  $scope.sI = 'all'; // Selected Index;
  $scope.getClass = function (type) {
    if (type == $scope.sI) {
      return 'selected';
    }
    else {
      return '';
    }
  }
}
