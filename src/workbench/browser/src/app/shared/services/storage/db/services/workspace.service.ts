import { dataSource } from 'eo/workbench/browser/src/app/shared/services/storage/db/dataSource';
import { Workspace } from 'eo/workbench/browser/src/app/shared/services/storage/db/models';
import { BaseService } from 'eo/workbench/browser/src/app/shared/services/storage/db/services/base.service';

export class WorkspaceService extends BaseService<Workspace> {
  baseService = new BaseService(dataSource.workspace);

  constructor() {
    super(dataSource.workspace);
  }

  async bulkRead(params: Record<string, any>) {
    const result = await this.baseService.bulkRead(params);

    result.data.forEach(item => {
      item.title = $localize`Personal Workspace`;
    });

    return result;
  }
}
